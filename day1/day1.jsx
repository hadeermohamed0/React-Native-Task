//    <SafeAreaView style={{ flex: 1, paddingTop: 50 }}>
//         <ScrollView ref={scrollRef} horizontal pagingEnabled>
//           {images.map((img, i) => (
//             <Image
//               source={img}
//               style={{ width: width, height: "80%", resizeMode: "cover" }}
//             />
//           ))}
//         </ScrollView>
//       </SafeAreaView>

//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "center",
//           marginTop: 10,
//         }}
//       >
//         {images.map((img, i) => (
//           <TouchableOpacity key={i} onPress={() => scroll(i)}>
//             <Image
//               source={img}
//               style={[
//                 {
//                   width: 60,
//                   height: 60,
//                   marginHorizontal: 5,
//                   borderRadius: 10,
//                   borderWidth: 2,
//                   borderColor: "transparent",
//                 },
//               ]}
//             />
//           </TouchableOpacity>
//         ))}
//       </View>