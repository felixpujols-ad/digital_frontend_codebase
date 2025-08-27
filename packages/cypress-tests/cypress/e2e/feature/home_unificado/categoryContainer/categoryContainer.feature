@home_unificado
Feature: Category Container
    As A User Of The Liverpool Website
    I Want To View The Category Container Section
    So That I Can Easily Explore And Understand The Different Product Categories

    @e2e
    Scenario: User Can See The Category Container
        Given The User Is On The Home Unificado
        When The User Scroll Down To The Category Container Section
        Then The User Should See The Category Container Section

    @e2e
    Scenario: User Can See More Than 1 Category Item
        Given The User Is On The Home Unificado
        When The User Scroll Down To The Category Container Section
        Then The User Should See More Than 1 Category Item
        And Each Container Should Include An Image Title Subtitle And Link

    @e2e
    Scenario: User Click On a Category Item
        Given The User Is On The Home Unificado
        When The User Scroll Down To The Category Container Section
        And The User Click On a Category Item
        Then The User Is Redirected To The Correct Url
