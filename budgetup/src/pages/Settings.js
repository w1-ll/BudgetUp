import React from 'react';

function Settings() {
    const handleAccountRemoval = () => {
        const confirmDeletion = window.confirm("Are you sure you want to delete your account? This action cannot be undone.");
        if (confirmDeletion) {
            // Add code here to handle account removal
            // ...
            alert("Account removed.");
        }
    };
    const handlePasswordReset = () => {
        let confirmReset = window.confirm("Are you sure you want to reset your password?");
        if (confirmReset) {
            let newPassword = prompt("Please enter your new password:");
            if (newPassword) {
                // Add code here to handle password reset
                // ...
                while(newPassword.length < 8){
                    newPassword = prompt("Password must be at least 8 characters long. Please enter your new password:");
                }
                alert("Password reset successful.");
            }
        }
    };

    return (
        <div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <button className="material-symbols-outlined" onClick={handleAccountRemoval}>person_remove</button>
            <button className="material-symbols-outlined" onClick={handlePasswordReset}>lock_reset</button>
        </div>
    );
}

export default Settings;