package com.example.Nike.request;


    public class GoogleAuthRequest {

        private String googleToken;

        // Constructors, getters, setters...
        public GoogleAuthRequest() {}

        public GoogleAuthRequest(String googleToken) {
            this.googleToken = googleToken;
        }

        public String getGoogleToken() {
            return googleToken;
        }

        public void setGoogleToken(String googleToken) {
            this.googleToken = googleToken;
        }
    }



