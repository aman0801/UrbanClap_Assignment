﻿# UrbanClap_Assignment



https://github.com/user-attachments/assets/a8efde9b-b843-42df-932c-85fb6399e434


 
Section 1: Node.js Fundamentals

Write a code snippet to demonstrate how to create a simple REST API in Node.js that performs CRUD operations.

Section 2: Problem solving

Automated GST Invoicing System Development using Firebase Firestore and Cloud Functions.

Objective

The primary objective of this question is to design and implement an automated system for generating Goods and Services Tax (GST) invoices. This system should leverage Firebase Firestore's PubSub trigger mechanism to initiate an automated invoicing process based on specific document field changes within a Firestore collection.

System Requirements

Firestore Collection and Trigger Setup:

Candidates are required to create a Firestore collection named bookings. This collection will store documents containing fields such as name, total Booking Amount, and a status field, among others that will be defined at a later stage.
The system must monitor the status field of each document. A Cloud Function should be automatically triggered when the status field's value changes to finished.

Cloud Function Execution:

Upon activation, the Cloud Function should read the relevant parameters from the triggered document (e.g., name, total Booking Amount).
These parameters will be used to calculate the GST by applying a predefined GST slab rate. Candidates must design the system to separate the GST amount into IGST and SGST/CGST components according to Indian GST laws.

GST API Integration:

The system should integrate with an external GST API to file the GST based on the information processed by the Cloud Function. It is the responsibility of the candidates to research and implement the integration with a suitable GST API, including handling the authentication and data submission processes.
Candidates should also propose a method for testing the GST API integration, considering the challenges of testing with real tax filing systems.

Deliverables

Implementation of the Cloud Function for processing booking documents and calculating GST.
Integration with a GST API for automated GST filing, including detailed documentation on the integration process and testing approach.
A comprehensive guide on the system design, including an explanation of how IGST and SGST/CGST calculations are handled.
Candidates are expected to demonstrate their problem-solving skills, familiarity with Firebase Firestore and Cloud Functions, and understanding of the GST filing process in India.
For solution of the problem above provide the link of Github ID making it public 
Also make and upload the link (giving access to all)  of a video of 5 mins explaining the overview of the code and how you reached to the solution for the problem above 
