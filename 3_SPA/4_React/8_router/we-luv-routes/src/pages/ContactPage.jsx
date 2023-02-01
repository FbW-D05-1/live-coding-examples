import { useLocation } from "react-router-dom";

const ContactPage = () => {
  const queryString = useLocation().search;

  const name2 = queryString.split("=")[1];
  console.log("TOM", name2);
  const queryParams = new URLSearchParams(queryString);

  const name = queryParams.get("name");

  console.log(name);
  return (
    <div>
      <h1>Hallo {name}, please Contact us</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur enim
        ipsam asperiores autem reprehenderit velit assumenda aliquam ex vero
        iure?
      </p>
    </div>
  );
};

export default ContactPage;
