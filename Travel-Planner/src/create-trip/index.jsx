import { TextField } from "@mui/material";
import { useState, React } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

function CreateTrip() {
  const [place, setPlace] = useState();
  return (
    <>
      <div className="trip-container">
        <h2>How you like your Travel?</h2>
        <p> Just fill this form so that we can make your trips better!</p>
      </div>

      <div>
        <div>
          <h2> Where do you want to go?</h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.GOOGLE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {
                setPlace(v);
              },
            }}
          />
          <h2> How manys days are you planning for your trip</h2>
          <TextField
            fullWidth
            sx={{ width: "99%", padding: "10px", margin: "10px" }}
            variant="outlined"
          />

          <h2>How rich are you?</h2>
        </div>
      </div>
    </>
  );
}

export default CreateTrip;
