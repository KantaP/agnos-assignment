"use client"

import StaffView from "@/components/staffView";
import { PatientFormData } from "@/models/patientForm";
import { useEffect, useRef, useState } from "react";

const StaffViewContainer = () => {
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
        websocketRef.current = new WebSocket(`ws://${window.location.hostname}:8081`);

        websocketRef.current.onopen = () => {
            console.log('WebSocket connection opened');
        };

        websocketRef.current.onclose = () => {
            console.log('WebSocket connection closed');
        };

        websocketRef.current.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        websocketRef.current.onmessage = (event) => {
            const rawMessage = event.data as string;

            // ตัดส่วนนำหน้า "[WebSocket Server] Server received from ..." ออก
            const jsonStartIndex = rawMessage.indexOf('{');
            if (jsonStartIndex !== -1) {
              const jsonString = rawMessage.substring(jsonStartIndex);
              try {
                const parsedData: PatientFormData = JSON.parse(jsonString);
                // console.log('Received User Data:', parsedData);
                setFormData(parsedData); 
              } catch (error) {
                console.error('Error parsing JSON:', error);
                // console.log('Raw message:', rawMessage);
              }
            } else {
              console.log('Received non-JSON message or unexpected format:', rawMessage);
            }
        };


        return () => {
            if (websocketRef.current?.readyState === WebSocket.OPEN) {
                websocketRef.current.close();
            }
        };
    }, []);



    return (
        <StaffView data={formData} />
    );
}

export default StaffViewContainer;