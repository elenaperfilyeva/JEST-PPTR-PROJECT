import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import FeedbackPage from "../pages/FeedbackPage";
import TopBar from "../pages/components/TopBar";

import { username, password, timeout } from "../config";

describe("End-To-End Test", () => {
    let homePage;
    let feedbackPage;
    let loginPage
    let topBar;

    beforeAll(async () => {
        homePage = new HomePage();
        loginPage = new LoginPage();
        feedbackPage = new FeedbackPage();
        topBar = new TopBar();
    });

    it("should load homepage", async () => {
        await homePage.visit();
        await homePage.isNavbarDisplayed();
    });

    it("should submit feedback", async () => {
        await homePage.clickFeedbackLink();
        await feedbackPage.isFeedbackFormDisplayed();
        await feedbackPage.submitFeedback(
            "Johny The Sales", 
            "jphn@email.com", 
            "subject", 
            "Here comes your supre long comment message"
        );
    });

    it("should login to application", async () => {
        await homePage.visit();
        await topBar.isTopBarDisplayed();
        await topBar.clickSignInButton();
        await loginPage.isLoginFormDisplayed();
        await loginPage.login(username, password);
    });
});
