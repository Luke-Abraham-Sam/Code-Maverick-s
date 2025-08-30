💊 Medication Safety Monitor

Overview
**Medication Safety Monitor** is an AI-powered interactive web tool designed to help users, doctors, and pharmacists check for potential interactions between medicines and common foods. The system allows users to enter medicine names and dosages and provides instant feedback on possible interactions with specific foods.  

This project uses **pure JavaScript for interaction logic** — no backend required. The focus is on quick, user-friendly checks for commonly used medicines and foods.

## Features
- Check interactions between **top medicines** and **common foods**.
- Alerts when a medicine interacts with specific foods.
- Displays a warning when no known interaction exists but cautions about other foods.
- Dynamic UI: add multiple medicines and dosages easily.
- Modern and responsive interface for desktops and tablets.

---

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript  
- **Deployment:** Netlify (static website)  
- **Libraries:** None (pure JS implementation)

---

## How to Use
1. Open the website: [Live Demo](https://medicinesafetymonitor.netlify.app/)  
2. Enter the medicine name and dosage.  
3. Click **Check Interactions** to see warnings or safe food interactions.  
4. Click **+ Add Another Drug** to add more medicines to check simultaneously.  

---

## Future Enhancements
- Expand the medicine and food database to cover more items.  
- Integrate AI/NLP models (Hugging Face) for advanced interaction analysis.  
- Add a backend to store user queries and improve real-time updates.

---

## Project Structure
prescription_ai/
│
├── index.html ← Main HTML page
├── style.css ← Styling for the interface
├── script.js ← Interaction logic and checks
