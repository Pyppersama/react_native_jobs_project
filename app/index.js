import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import {COLORS, icons, images, SIZES} from '../constants';
import {
    Nearbyjobs, Popularjobs,
    ScreenHeaderBtn, Welcome
} from '../components';


const Home = () => {
    const router = useRouter();     //created a constant named router using the useRouter Hook
  
    return (
        <SafeAreaView
            style ={{flex: 1, backgroundColor: COLORS.lightWhite}}
        >       {/*allows d phone to not obstruct d app ui*/}
            <Stack.Screen 
                options={{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,  //makes d header shadow invisible
                    headerLeft: () =>(
                        <ScreenHeaderBtn 
                            iconUrl={icons.menu}
                            dimension= "60%"
                        />
                    ),
                    headerRight: () =>(
                        <ScreenHeaderBtn 
                            iconUrl={images.profile}
                            dimension= "100%"
                        />
                    ),
                    headerTitle: ""
                }}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}    //makes the scrolling bar invisible
            >
                <View               //a.k.a div tag
                    style= {{
                        flex: 1, padding: SIZES.medium
                    }}
                >
                    <Welcome />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;