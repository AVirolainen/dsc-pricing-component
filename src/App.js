import "./App.css";

import { useState } from "react";

import Switch from "@material-ui/core/Switch";
import topImage from "./images/bg-bottom.svg";
import botImage from "./images/bg-top.svg";
import Grid from "@material-ui/core/Grid";
import Card from "./components/Card";
import CardMain from "./components/CardMain";

function App() {
  const [state, setState] = useState(true);

  const handleChange = () => {
    setState(!state);
  };

  return (
    <div className="App">
      <img src={topImage} alt="top" className="backImage" />
      <img src={botImage} alt="bot" className="backImage" />
      <div className="appHeader">
        <div className="headerText">Our Pricing</div>
        <div className="switchBlock">
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>
              <div
                className="switchText"
                style={{
                  fontSize: "24px",
                  opacity: state ? "0.5" : "1",
                }}
              >
                Annually
              </div>
            </Grid>
            <Grid item>
              <Switch
                checked={state}
                onChange={handleChange}
                name="checkedA"
                color="primary"
              />
            </Grid>
            <Grid item>
              <div
                className="switchText"
                style={{
                  fontSize: "24px",
                  opacity: state ? "1" : "0.5",
                }}
              >
                Monthly
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="cardsBody">
        <Card
          type="Basic"
          cost={state ? "19.99" : "199.99"}
          storage="500 GB"
          users="2"
          memory="3"
        />
        <CardMain cost={state ? "24.99" : "249.99"} />
        <Card
          type="Master"
          cost={state ? "39.99" : "399.99"}
          storage="2 TB"
          users="10"
          memory="20"
        />
      </div>
    </div>
  );
}

export default App;
