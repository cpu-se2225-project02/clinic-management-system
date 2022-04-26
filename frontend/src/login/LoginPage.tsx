import React from "react";
import { Col, Row, Container, Form, Dropdown, Button } from "react-bootstrap";
import Header from "../common/Header";
import Sidebars from "../common/Sidebars";
import { useState } from "react";
// import "./PatientList.css";
import { BiSearchAlt2 } from "react-icons/bi";


export default function LoginPage() {
    return (

<Form>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </Form>
    )
  }
