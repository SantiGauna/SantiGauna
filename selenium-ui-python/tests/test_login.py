from pages.login_page import LoginPage

def test_login_valido(browser):
    login_page = LoginPage(browser)
    login_page.load()
    login_page.login("standard_user", "secret_sauce")

    assert "/inventory.html" in browser.current_url
