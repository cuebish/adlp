import React from 'react';
import { ArrowLeft } from 'lucide-react';

function Register() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-green-600 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <a 
              href="/" 
              className="flex items-center text-white hover:text-green-100 transition-colors"
            >
              <ArrowLeft className="mr-2" />
              Back to Home
            </a>
            <img 
              src="https://amigosdelaplacita.s3.us-east-2.amazonaws.com/ADLP_Logo_Small.JPG" 
              alt="Amigos de la Placita" 
              className="h-12 w-auto"
            />
          </div>
        </div>
      </div>

      {/* Registration Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Register for Placita Open 2025</h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div id="cognito-form">
              <script src="https://www.cognitoforms.com/f/seamless.js" data-key="fOVVQ72VBkKUi8WdktrZcg" data-form="5"></script>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Amigos de la Placita. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Register;