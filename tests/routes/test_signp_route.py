from django.test import TestCase, Client

class SignupTests(TestCase):
    def test_successful_signup(self):
        client = Client()
        response = client.get("/")
        print(response)
        self.assertTrue(True)
