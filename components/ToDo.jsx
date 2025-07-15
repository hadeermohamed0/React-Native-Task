import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";


const ToDo = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  const handleAddTask = () => {
    if (task.trim().length == 0) {
      setError("Empt Task!!!!");
      return;
    } else if (task.trim().length < 3) {
      setError("Task must be at least 3 characters");
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      name: task,
      done: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
    setError("");
  };

  const handleToggleDone = (id) => {
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, done: !t.done } : t
    );
    setTasks(updated);
  };

  const handleDelete = (id) => {
    const updated = tasks.filter((t) => t.id !== id);
    setTasks(updated);
  };

  const doneCount = tasks.filter((t) => t.done).length;

  return (
    <View style={styles.container2}>
      <Text style={styles.title2}>My ToDo List</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={task}
          onChangeText={setTask}
          placeholder="Enter task..."
          placeholderTextColor="#ccc"
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {error !== "" && <Text style={styles.error}>{error}</Text>}

      <Text style={styles.counter}>
        {doneCount} done of {tasks.length} tasks
      </Text>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskRow}>
            <Text
              style={[
                styles.taskText,
                item.done && {
                  textDecorationLine: "line-through",
                  color: "#aaa",
                },
              ]}
            >
              {item.name}
            </Text>

            <TouchableOpacity onPress={() => handleToggleDone(item.id)}>
              <Text style={styles.doneButton}>
                {item.done ? "✓ Done" : "☐ Done"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleDelete(item.id)}>
              <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title2: {
    backgroundColor: "pink",
    color: "#fff",
    textAlign: "center",
    fontSize: 22,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "#ccc",
    color: "#fff",
    paddingHorizontal: 10,
    borderRadius: 8,
    height: 40,
    borderWidth: 1,
    borderColor: "#555",
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: "#800080",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
  },
  addButtonText: {
    color: "pink",
    fontWeight: "bold",
  },
  error: {
    color: "#800080",
    marginBottom: 10,
    textAlign: "center",
  },
  counter: {
    color: "#grey",
    marginBottom: 10,
    textAlign: "center",
  },
  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "space-between",
  },
  taskText: {
    color: "black",
    flex: 1,
  },
  doneButton: {
    color: "green",
    marginHorizontal: 10,
  },
  deleteButton: {
    color: "red",
  },
});


export default ToDo;
