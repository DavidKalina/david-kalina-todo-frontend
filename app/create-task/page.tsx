import ColorPicker from "@/components/ColorPicker";
import { IconButton } from "@/components/IconButton";
import Input from "@/components/Input";
import NavToHomePage from "@/components/NavToHomePage";
import { Text } from "@/components/Text";

const CreateTaskPage = () => {
  return (
    <div className="flex flex-col space-y-8">
      <NavToHomePage />
      <Text className="text-[#4ea8de] font-bold">Title</Text>
      <Input placeholder="Ex Brush your teeth" className="bg-[#262626] border-[#333]" />
      <Text className="text-[#4ea8de] font-bold">Color</Text>
      <ColorPicker />
      <IconButton
        iconPosition="trailing"
        text="Add Task"
        className="text-white bg-[#1E6F9F] rounded-[8px] text-xl p-6"
        icon="PlusCircle"
      />
    </div>
  );
};

export default CreateTaskPage;
