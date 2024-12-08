import React from "react";
import { Alert } from "react-native";
import { Formik } from "formik";
import { ScreenContainer } from "../../../components/ScreenContainer/ScreenConatiner";
import CustomInput from "../../../components/CustomInput/CustomInput";
import CustomTextArea from "../../../components/CustomTextArea/CustomtextArea";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { Theme } from "../../../constants/Theme";
import { TextList } from "../../../constants/TextList";
import {
  verticalResponsive,
  horizontalResponsive,
} from "../../../utils/responsiveControlFunctions";
import { SvgXml } from "react-native-svg";
import { svg } from "../../../constants/svg";
import { AddPostValidationSchema } from "../../../constants/validationSchemas";
import useCallApiWhenRequired from "../../../hooks/useCallApiWhenRequired";
import usePostApi from "../../../services/ApiHooks/postApis";

const AddPostScreen = ({ route }: any) => {
  const { editForm, previousData } = route?.params || {};
  const { addPostApi } = usePostApi();
  const { loading, callApi } = useCallApiWhenRequired(addPostApi, (data) => {
    Alert.alert("Success", "Post added successfully");
  });
  return (
    <ScreenContainer
      HeaderLabel={editForm ? TextList.Edit_Post : TextList.Add_New_Post}
    >
      <Formik
        initialValues={{
          title: previousData?.title || "",
          description: previousData?.body || "",
        }}
        validationSchema={AddPostValidationSchema}
        onSubmit={(values) => {
          console.log("Form submitted with values: ", values);
          callApi({
            title: values.title,
            body: values.description,
          });
          // Handle submission here, e.g., send data to an API or navigate
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <CustomInput
              placeholder={TextList.Post_Tile}
              placeholderTextColor={Theme.tableCellDescription}
              value={values.title}
              onChangeText={handleChange("title")} //@ts-ignore
              leftIcon={<SvgXml xml={svg.postTitle} />}
              style={{
                height: verticalResponsive(50),
                borderRadius: horizontalResponsive(20),
              }} //@ts-ignore
              errorMessage={touched.title && errors.title && errors.title}
              onBlur={handleBlur("title")}
            />
            <CustomTextArea
              placeholder={TextList.Post_Description}
              placeholderTextColor={Theme.tableCellDescription}
              value={values.description}
              onChangeText={handleChange("description")}
              onBlur={handleBlur("description")}
              leftIcon={
                <SvgXml xml={svg.descriptionIcon} height={20} width={20} />
              } //@ts-ignore
              errorMessage={
                touched.description && errors.description && errors.description
              }
            />

            <CustomButton
              text={editForm ? TextList.Edit_Post : TextList.Add_Post}
              onPress={handleSubmit}
              loading={loading}
            />
          </>
        )}
      </Formik>
    </ScreenContainer>
  );
};

export default AddPostScreen;
