# Agnos Candidate Assignment

Develop a responsive, real-time patient input form and staff view system. The project consists of
two main interfaces:
● Patient Form: A responsive form where patients can enter their information.
● Staff View: A real-time, responsive interface for staff members to monitor the information being entered in the patient form.

## List of contents
- [Installation](#Installation)
- [Structure](#Structure)
- [Usage](#Usage)

## Installation 
```bash
npm install
```

## Structure 

### app/
React component of each pages 

### app/patient
Patient react component that only use in patient page

### app/staff
Staff react component that only use in staff page

### components/
React component for reuse

### models
Interfaces of any component props or state

### server
Websocket server

## Usage
start server 
  ```bash 
  node .\websocket-server.js
  ```
run dev 
  ```bash 
  npm run dev
  ```
build for production 
  ```bash 
  npm run build
  ```