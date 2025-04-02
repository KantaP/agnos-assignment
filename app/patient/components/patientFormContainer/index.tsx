"use client";

import PatientForm from "@/components/patientForm";
import { PatientFormData } from "@/models/patientForm";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";

const PatientFormContainer = () => {

    const [formData, setFormData] = useState<PatientFormData>({
        firstName: '',
        middleName: '',
        lastName: '',
        dob: '',
        gender: '',
        phone: '',
        email: '',
        address: '',
        preferredLanguage: '',
        nationality: '',
        emergencyName: '',
        emergencyRelationship: '',
        religion: '',
    });

    const websocketRef = useRef<WebSocket | null>(null);

    useEffect(() => {
        websocketRef.current = new WebSocket(`ws://strawberry-crisp-13842-c5e2b31e4c93.herokuapp.com`);

        websocketRef.current.onopen = () => {
            console.log('WebSocket connection opened');
          };
    
          websocketRef.current.onclose = () => {
            console.log('WebSocket connection closed');
          };
    
          websocketRef.current.onerror = (error) => {
            console.error('WebSocket error:', error);
          };
      
    
          return () => {
            if (websocketRef.current?.readyState === WebSocket.OPEN) {
              websocketRef.current.close();
            }
          };
      }, []);



    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {  name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleGenderChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData((prevData) => ({
            ...prevData,
            gender: e.target.value,
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (websocketRef.current?.readyState === WebSocket.OPEN) {
            const message: PatientFormData = formData;
            websocketRef.current.send(JSON.stringify(message));
          } else {
            console.log('WebSocket connection is not open.');
          }
    };

    

    return (
        <PatientForm 
            formData={formData}
            onChange={handleChange}
            onGenderChange={handleGenderChange}
            onSubmit={handleSubmit}
        />
    );
}

export default PatientFormContainer;