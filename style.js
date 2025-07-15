import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  colorBox: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  boxText: {
    color: "#fff",
    fontWeight: "bold",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    backgroundColor: "pink",
    paddingVertical: 8,
    paddingHorizontal: 10,
    color: "blue",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginRight: 15,
  },
  name: {
    fontSize: 16,
    color: "#333",
  },
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

export default styles;
