import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import InterestsPage from "./InterestsPage";
import SignUpPage from "./SignUpPage";
import HomePage from "./HomePage";
import WritingPage from "./WritingPage";
import ForumPage from "./ForumPage";
import WritingCategoryPage from "./WritingCategoryPage";
import StoryPage from "./StoryPage";
import CommentPage from "./CommentPage";
import BookmarkPage from "./BookmarkPage";
import LookBackPage from "./LookBackPage";
import ForgetPasswordPage from "./ForgetPasswordPage";
import GuidePage from "./GuidePage";
import PersonalPage from "./PersonalPage";
import SurveyPage from "./SurveyPage";

function RouteCollection() {
  var isLoggedIn = useSelector((state) => state.auth.userUID);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route exact path='/signUp'>
          <SignUpPage />
        </Route>
        <Route exact path='/login'>
          <LoginPage />
        </Route>
        <Route exact path='/guide'>
          <GuidePage />
        </Route>
        <Route exact path='/survey'>
          <SurveyPage />
        </Route>
        <Route exact path='/forgetPassword'>
          <ForgetPasswordPage />
        </Route>
        <Route exact path='/interests'>
          {isLoggedIn ? (
            <InterestsPage />
          ) : (
            <Redirect to={{ pathname: "/login" }} />
          )}
        </Route>
        <Route exact path='/personal'>
          {isLoggedIn ? (
            <PersonalPage />
          ) : (
            <Redirect to={{ pathname: "/login" }} />
          )}
        </Route>
        <Route exact path='/home'>
          {isLoggedIn ? <HomePage /> : <Redirect to={{ pathname: "/login" }} />}
        </Route>
        <Route exact path='/writing'>
          {isLoggedIn ? (
            <WritingPage />
          ) : (
            <Redirect to={{ pathname: "/login" }} />
          )}
        </Route>
        <Route exact path='/writingCategory'>
          {isLoggedIn ? (
            <WritingCategoryPage />
          ) : (
            <Redirect to={{ pathname: "/login" }} />
          )}
        </Route>
        <Route exact path='/forum'>
          <ForumPage />
        </Route>
        <Route exact path='/story/:id'>
          <StoryPage />
        </Route>
        <Route exact path='/comment/:id'>
          <CommentPage />
        </Route>
        <Route exact path='/bookmark'>
          {isLoggedIn ? (
            <BookmarkPage />
          ) : (
            <Redirect to={{ pathname: "/login" }} />
          )}
        </Route>
        <Route exact path='/lookBack'>
          {isLoggedIn ? (
            <LookBackPage />
          ) : (
            <Redirect to={{ pathname: "/login" }} />
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default RouteCollection;
