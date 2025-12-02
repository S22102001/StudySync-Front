// src/pages/Login/Login.jsx - Main login page component

// ========== IMPORTS ==========
// React hooks for state management
import { useState } from "react";

// Custom reusable components
import FormContainer from "../../components/FormContainer/FormContainer.jsx"; // Wrapper with title, background, and card styling
import TextFieldComp from "../../components/TextFieldComp/TextFieldComp.jsx";   // Styled input fields
import ButtonCont from "../../components/ButtonCont/ButtonCont.jsx";           // Styled login button

// Styled components specific to this login page
import { LoginFormStack, FooterText, FooterLink } from "./Login.style.js";

// ========== MAIN LOGIN COMPONENT ==========
export default function Login({ onLoginSuccess }) {
    // ========== STATE MANAGEMENT ==========
    // Form state - stores email and password input values
    const [form, setForm] = useState({ email: "", password: "" });

    // ========== EVENT HANDLERS ==========
    // Handles input field changes - updates form state when user types
    const handleIChange = (e) => {
        setForm((prev) => ({
            ...prev, // Keep existing form data
            [e.target.name]: e.target.value, // Update only the changed field
        }));
    };

    // Handles form submission - processes login when user clicks Login button
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        console.log("Login data:", form); // Log form data (replace with actual login logic)
        
        // ========== LOGIN VALIDATION ==========
        // Basic validation - check if fields are filled
        if (form.email && form.password) {
            // Simulate successful login (replace with actual authentication logic)
            console.log("Login successful! Navigating to HomePage...");
            onLoginSuccess(); // Navigate to HomePage
        } else {
            alert("Please fill in both email and password");
        }
    };

    // ========== COMPONENT RENDER ==========
    return (
        // Main container with StudySync title and Sign-in subtitle
        <FormContainer title="StudySync" subtitle="Sign-in">
            
            {/* Form wrapper with spacing and submit handling */}
            <LoginFormStack spacing={3} component="form" onSubmit={handleSubmit}>
                
                {/* Email input field */}
                <TextFieldComp
                    inputLabel="Email"
                    inputName="email"
                    inputValue={form.email}
                    handleIChange={handleIChange}
                />

                {/* Password input field */}
                <TextFieldComp
                    inputLabel="Password"
                    inputName="password"
                    inputValue={form.password}
                    handleIChange={handleIChange}
                    type="password"
                />

                {/* Login submit button */}
                <ButtonCont text="Login" onClick={handleSubmit} />
            </LoginFormStack>

            {/* Footer section with signup link */}
            <FooterText>
                Don't have an account?
                <FooterLink component="span" onClick={() => alert("Signup functionality coming soon!")}>
                    Signup Here
                </FooterLink>
            </FooterText>
        </FormContainer>
    );
}
