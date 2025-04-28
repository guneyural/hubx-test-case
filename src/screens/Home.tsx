import React from "react";
import {
  Dimensions,
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  View,
} from "react-native";
import Header from "../components/Home/Header";
import { useEffect } from "react";
import * as NavigationBar from "expo-navigation-bar";
import { useAppDispatch, useAppSelector } from "../store/store";
import PremiumButton from "../components/Home/PremiumButton";
import { getCategories, getQuestions } from "../features/home/homeSlice";
import QuestionsSection from "../components/Home/QuestionsSection";
import CategoryItem from "../components/Home/CategoryItem";
import BottomNavbar from "../components/ui/BottomNavbar";

const screenWidth = Dimensions.get("window").width;
const horizontalPadding = 24;
const gapBetweenItems = 11;
const totalHorizontalPadding = horizontalPadding * 2;
const itemWidth = (screenWidth - totalHorizontalPadding - gapBetweenItems) / 2;

function HomeScreen() {
  const dispatch = useAppDispatch();

  const Questions = useAppSelector((state) => state.home.questions);
  const Categories = useAppSelector((state) => state.home.categories);

  useEffect(() => {
    (async () => {
      if (Platform.OS == "android") {
        await NavigationBar.setBackgroundColorAsync("#FFFFFFEB");
        await NavigationBar.setButtonStyleAsync("dark");
      }
    })();

    dispatch(getQuestions());
    dispatch(getCategories());
  }, []);

  return (
    <View className="flex-1 bg-[#FFFFFFEB]">
      <SafeAreaView className="flex-1 bg-[#F6F6F6]">
        <StatusBar backgroundColor="#F6F6F6" barStyle="dark-content" />
        <Header />

        <View className="bg-[#FBFAFA] flex-1">
          <FlatList
            data={Categories}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            ListHeaderComponent={
              <>
                <View className="pr-6">
                  <PremiumButton />
                </View>

                {Questions.length > 0 && (
                  <View className="mb-6">
                    <QuestionsSection questions={Questions} />
                  </View>
                )}
              </>
            }
            numColumns={2}
            renderItem={({ item, index }) => (
              <CategoryItem
                item={item}
                index={index}
                itemWidth={itemWidth}
                gapBetweenItems={gapBetweenItems}
              />
            )}
            contentContainerStyle={{
              paddingLeft: horizontalPadding,
              paddingBottom: horizontalPadding,
            }}
          />
        </View>
      </SafeAreaView>

      <BottomNavbar testID="bottom-navbar"/>
    </View>
  );
}
export default HomeScreen;
