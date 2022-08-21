import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);   /* flatlist 를 렌더링하는 배열들을 조정하는 함수이다. */
    setEnteredGoalText("");      /* 제출했으니 TextInput 폼을 비운다. */
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}  /* 엔터고텍스트 변수를 타자가 변할때 마다 바꾸어서 문자열로 넣어준다 */
        value={enteredGoalText}   /* 그래야 사용자가 본인이 타자를 치고 있음을 확인할 수 있다. */
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row", /* 옆에 나란히 있게 해주는 코드 */
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
