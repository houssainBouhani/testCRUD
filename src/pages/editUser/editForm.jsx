import React, { useEffect } from "react";

// bootstrap components
import { Col, Container, Row, Card, Form, Button } from "react-bootstrap";
// react router link
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


/// form validations library
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//hooks
import { useDispatch, useSelector } from "react-redux";

//action creator
import { editUser } from "../../store/actions/user";

// define form schema and validation
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  username: yup.string().required("username is required"),
  email: yup.string().email().required("email is required"),
  city: yup.string().required("city is required"),
});


const EditForm = ({ userbyId, id }) => {

  const dispatch = useDispatch();

  //get the user added
  const userUpdated = useSelector((state) => state.userReducer.userUpdated);
  let navigate = useNavigate();

  useEffect(() => {

    //if user is updated then redirect to home page
    if (userUpdated) {
      navigate(`/`);
    }

  }, [userUpdated,navigate,dispatch,id])


//prefetch formvalues from api
  const formValues = {
    name: userbyId?.name,
    username: userbyId?.username,
    email: userbyId?.email,
    city: userbyId?.city,
  };


  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: formValues
  });



  //submit form for edit
  const submitForm = (formData) => {
    dispatch(editUser(id,formData ));
  };

  return (
    <>
      <Container>
        <Row className="mb-5">
          <Col className="mt-5 d-flex align-items-center">
            <h1>edit User</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Form onSubmit={handleSubmit(submitForm)} noValidate>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      name="name"
                      {...register("name", { required: true })}
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className={errors.name?.message ? "d-block" : "d-none"}
                    >
                      {errors.name?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      name="username"
                      {...register("username", { required: true })}
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className={
                        errors.username?.message ? "d-block" : "d-none"
                      }
                    >
                      {errors.username?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      {...register("email", { required: true })}
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className={errors.email?.message ? "d-block" : "d-none"}
                    >
                      {errors.email?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>city</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="city "
                      name="city"
                      {...register("city", { required: true })}
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className={errors.city?.message ? "d-block" : "d-none"}
                    >
                      {errors.city?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Button variant="primary" className="me-2" type="submit">
                    add
                  </Button>
                  <Link className="btn btn-secondary me-2" to={`/`}>

                    cancel
                  </Link>
                </Form>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>

  )
}

export default EditForm