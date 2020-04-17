#!/usr/bin/env python
import os
import sys

try:
    import django
    from django.conf import settings

    settings.configure(
        DEBUG=True,
        USE_TZ=True,
        DATABASES={
            "default": {
                "ENGINE": "django.db.backends.sqlite3",
            }
        },
        ROOT_URLCONF="tests.urls",
        INSTALLED_APPS=[
            "django.contrib.auth",
            "django.contrib.contenttypes",
            "django.contrib.sites",
            "app",
        ],
        SITE_ID=1,
        NOSE_ARGS=['-s'],
        FIXTURE_DIRS=['tests/fixtures']
    )
    django.setup()

    from django_nose import NoseTestSuiteRunner

except ImportError:
    raise ImportError("To fix this error, run: pip install -r requirements.txt")


##
# This returns all dirs within the `tests/` dir that do not start
# with a `_` (this will be considred private)
def test_modules():
    dirs = [x[0] for x in os.walk("tests")]
    is_private = lambda path: any(pathPart[0] == "_" for pathPart in path.split("/"))
    return list(
        filter(lambda path: not is_private(path), dirs)
    )

def run_tests(*test_args):
    if not test_args:
        test_args = test_modules()

    test_runner = NoseTestSuiteRunner(verbosity=1)
    failures = test_runner.run_tests(test_args)
    if failures:
        sys.exit(failures)


if __name__ == '__main__':
    run_tests(*sys.argv[1:])
