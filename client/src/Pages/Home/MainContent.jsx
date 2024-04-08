import React from "react";
import "./Home.css";
import { Typography, Button, Grid, Box } from "@mui/material";
import { GitHub, Instagram } from "@mui/icons-material";
function MainContent() {
  return (
    <div className="main overflow-hidden flex items-center">
      <div className="flex flex-row justify-center w-full">
        <div className="mx-5 p-5 w-1/2  flex flex-col justify-center items-end">
          <div className="w-fit text-center flex flex-col justify-end items-center">
            <Typography
              variant="h4"
              className=""
              component="h2"
              sx={{ fontWeight: "900" }}
            >
              Achieve new heights <br /> with <br />
              <Typography
                variant="h3"
                component="span"
                className="bg-gradient-to-br from-red-500 to-amber-300 bg-clip-text text-transparent"
                sx={{ fontWeight: "900" }}
              >
                Serflow
              </Typography>
            </Typography>

            <br />
            <Typography
              variant="h6"
              component="span"
              className="text-center w-60"
              sx={{ fontWeight: "100", fontSize: 15 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              ex dignissimos eius animi labore suscipit quibusd
            </Typography>

            <div className="flex items-center flex-row mt-10 justify-between">
              <div className="mr-5">
                <Button
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(45deg, #FE6B8B 40%, #FF8E53 90%)",
                    border: 0,
                    borderRadius: 1,
                    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                    color: "white",
                    height: 48,
                    padding: "0 30px",
                    "&:hover": {
                      color: "red",
                      background: "white",
                      border: 1,
                    },
                  }}
                >
                  Start Now
                </Button>
              </div>
              <div>
                <Button
                  variant="text"
                  sx={{
                    color: "grey",
                    fontSize: "18px",
                  }}
                >
                  FAQ
                </Button>
              </div>
            </div>

            <div className="flex flex-row mt-10 w-20 justify-between">
              <a href="https://github.com/merlinkk">
                <GitHub />
              </a>
              <a href="#">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className="imgcar mx-10 p-5 w-1/2">
        <Grid className="gridmain" container spacing={2} item xs={6}>
        <Box
            className="gridskew mt-20"
            sx={{ display: "flex", flexDirection: "row" }}
        >
            <Box className="box_1" sx={{ flex: 1, opacity: 1 }}>
            <img className="box1_img_1" alt="light_1" src="Le1.png"  />
            <img className="box1_img_1" alt="light_1" src="Le1.png" />
            </Box>
            <Box className="box_2" sx={{ flex: 1, opacity: 1 }}>
            <img className="box2_img_2" alt="light_2" src="Le2.png" />
            <img className="box2_img_2" alt="light_2" src="Le2.png" />

            </Box>
        </Box>
        </Grid>

        </div>
      </div>
    </div>
  );
}

export default MainContent;
