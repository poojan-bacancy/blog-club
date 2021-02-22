import { View, Text, TouchableOpacity , Dimensions } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import ArticleScreen from '../screens/ArticleScreen'
import NewArticleScreen from '../screens/NewArticleScreen'
import SearchScreen from '../screens/SearchScreen'
import ProfileScreen from '../screens/ProfileScreen'
import Colors from '../constants/Colors';
import Feather from 'react-native-vector-icons/Feather'

const { width } = Dimensions.get('window')

function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const tabBarIcon = 
            label === 'Home'
                ? 'home'
                : label === 'Article'
                ? 'book-open'
                :label === 'Search'
                ? 'search'
                : 'user'

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        if (index === 2){
            return (
                <TouchableOpacity
                  key={index}
                  accessibilityRole="button"
                  accessibilityState={isFocused ? { selected: true } : {}}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarTestID}
                  onPress={onPress}
                  onLongPress={onLongPress}
                  style={{ flex: 1 , justifyContent : 'center' , alignItems : 'center' , height : 55 , width : 55, position : 'absolute' , left : (width/2) - 30 , borderRadius : 30 , bottom : 15 , backgroundColor : Colors.primary }}
                >
                  <Feather name="plus" size={30} color="#8FE6FF" />
                </TouchableOpacity>
              );
        }

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{   width : width/5.5  , marginRight : (index === 1) ? 60 : 15 , alignItems : 'center' , justifyContent : 'center' , height : 60  }}
          >
            <Feather name={tabBarIcon} size={20} color= {isFocused ? Colors.primary : '#7B8BB2' } />
            <Text style={{ color: isFocused ? Colors.primary : '#7B8BB2' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator()

const BlogNavigator = () => {
    return(
        <Tab.Navigator 
            tabBar={props => <MyTabBar {...props} />}
        >
            <Tab.Screen  name="Home" component={HomeScreen}  />
            <Tab.Screen  name="Article" component={ArticleScreen}  />
            <Tab.Screen  name="NewArticle" component={NewArticleScreen} />
            <Tab.Screen  name="Search" component={SearchScreen}  />
            <Tab.Screen  name="Profile" component={ProfileScreen}  />
        </Tab.Navigator>
    );
}

export default BlogNavigator