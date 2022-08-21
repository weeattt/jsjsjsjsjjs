import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]); /* 빈 배열을 넣은 usestate 이다. */

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((fff) => [                      /*setState 의 첫번째 파라미터는 현재의 state 구나*/
      ...fff,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} /> 
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}  /* 여태 courseGoals 에 넣은 배열을 리턴한다. */
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
