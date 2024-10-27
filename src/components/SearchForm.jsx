import { useNavigation, Form } from "react-router-dom";
import Wrapper from "../assets/wrappers/SearchForm";

const SearchForm = ({searchTerm}) => {
  const navigation = useNavigation();
  const isSubmittting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          name="search"
          className="form-input"
          defaultValue={searchTerm}
        />

        <button type="submit" disabled={isSubmittting} className="btn">
          {isSubmittting ? "Searching...." : "Search"}
        </button>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
