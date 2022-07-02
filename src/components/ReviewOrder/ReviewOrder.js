import { Paper, Typography, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { CartContext } from "../../App";
import "./ReviewOrder.css";

const ReviewOrder = (props) => {
  let [cart, setCart] = useContext(CartContext);

  // console.log(cart);
  console.log(JSON.parse(localStorage.getItem("key")));
  localStorage.removeItem("cart");
  return (
    <div>
      <div className="review-container">
        <div className="order-container">
          <Grid
            className="grid-container"
            container
            rowSpacing={2}
            columnSpacing={3}
          >
            <Grid item xs={4}>
              <Paper elevation={3} square>
                <img
                  src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
                <Box
                  sx={{
                    padding: "0 .5rem",
                  }}
                >
                  <Typography variant="subtitle2" component="p">
                    Nice Place To Explore
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper elevation={3} square>
                <img
                  src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper elevation={3} square>
                <img
                  src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper elevation={3} square>
                <img
                  src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper elevation={3} square>
                <img
                  src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper elevation={3} square>
                <img
                  src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper elevation={3} square>
                <img
                  src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </Paper>
            </Grid>
          </Grid>
        </div>
        <div className="cart-container"></div>
      </div>
    </div>
  );
};

export default ReviewOrder;
