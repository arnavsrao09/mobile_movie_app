import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, ScrollView, View } from "react-native";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center bg-primary">
      <Image source={images.bg} className="w-full h-full absolute" />
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{ minHeight: '100%', paddingBottom: 5 }}>
        <Image source={icons.logo} className="mt-20 mb-5 mx-auto w-10 h-10 " />

        <View className="flex-1 mt-5">
          <SearchBar 
          onPress={() => router.push("/search")}
          placeholder="Search for Movies"
          />
        </View>
      </ScrollView>
    </View>
  );
}
