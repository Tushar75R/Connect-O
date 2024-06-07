import React from 'react'
import Header from './Header'
import Title from '../Shared/Title'
import { Grid } from '@mui/material'
import ChatList from '../Specific/ChatList'

const AppLayout = () => (WrappedComponent) => {
    return (props) => {
        return (
          <>
            <Title />
            <Header />

            <Grid container height={"calc(100vh - 4rem)"}>
              <Grid
                item
                sm={4}
                md={3}
                height={"100%"}
                sx={{
                  display: { xs: "none", sm: "block" },
                }}
              >
                <ChatList chats = {[1,2,3,4]}/>
              </Grid>
              <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"} >
                <WrappedComponent {...props} />
              </Grid>
              <Grid
                item
                md={4}
                lg={3}
                sx={{
                  display: { xs: "none", md: "block" },
                  padding: "2rem",
                }}
                height={"100%"}
              >
                third
              </Grid>
            </Grid>
          </>
        );
    }
}

export default AppLayout