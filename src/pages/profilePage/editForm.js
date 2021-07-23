import React, {useState} from "react";
import { Form } from "react-final-form";
import { DatePicker, FormControl, FormTextField } from "lib/ui";
import Button from "routing/login/styled/button";
import ProfilePhoto from "pages/profilePage/profilePhoto";
import { formatISO} from "date-fns";

const EditForm = ({ values, setValues, closeForm }) => {
  const [image, setImage] = useState(values.image);
 
  const onSubmit = (values) => {
    
    setValues({ ...values, birthdate:  typeof values.birthdate === 'string'
        ? values.birthdate
        : formatISO(values?.birthdate, { representation: 'date' }), image });
    closeForm();
  };
  return (
    <div>
      <Form
        onSubmit={onSubmit}
        initialValues={values}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} noValidate>
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: "50px" }}>
                <ProfilePhoto onSave={(image) => {
                  setImage(image)
                }} defaultImage={values.image}/>
              </div>
              <div style={{ marginRight: "20px", width: "30%" }}>
                <FormControl label="First name">
                  <FormTextField placeholder="John" name="firstName" />
                </FormControl>
                <FormControl label="Second name">
                  <FormTextField placeholder="Smith" name="secondName" />
                </FormControl>
                <FormControl label="Birth date">
                  <DatePicker
                    name="birthdate"
                    id="date-picker-dialog"
                    placeholder="dd/mm/yyyy"
                    format="dd/MM/yyyy"
                    openTo="year"
                    variant="inline"
                    disableFuture={true}
                    KeyboardButtonProps={{
                      "aria-label": "change date of birth",
                    }}
                    inputVariant="outlined"
                  />
                </FormControl>
              </div>
              <div style={{ marginRight: "20px" }}>
                <FormControl label="Email">
                  <FormTextField placeholder="example@mail.com" name="email" />
                </FormControl>
                <FormControl label="Phone">
                  <FormTextField placeholder="839339282" name="phone" />
                </FormControl>
              </div>
              <div></div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button type="submit" style={{ width: "150px", align: "right" }}>
                Save
              </Button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default EditForm;
