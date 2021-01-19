from __future__ import absolute_import, division, print_function, unicode_literals

from six import python_2_unicode_compatible

from canvasapi.canvas_object import CanvasObject
from canvasapi.util import combine_kwargs


@python_2_unicode_compatible
class Login(CanvasObject):
    def __str__(self):
        return "{} ({})".format(self.id, self.unique_id)

    def delete(self):
        """
        Delete an existing login.

        :calls: `DELETE /api/v1/users/:user_id/logins/:id \
        <https://canvas.instructure.com/doc/api/logins.html#method.pseudonyms.destroy>`_

        :rtype: :class:`canvasapi.login.Login`
        """
        response = self._requester.request(
            "DELETE", "users/{}/logins/{}".format(self.user_id, self.id)
        )
        return Login(self._requester, response.json())

    def edit(self, **kwargs):
        """
        Update an existing login for a user in the given account.

        :calls: `PUT /api/v1/accounts/:account_id/logins/:id \
        <https://canvas.instructure.com/doc/api/logins.html#method.pseudonyms.update>`_

        :rtype: :class:`canvasapi.login.Login`
        """
        response = self._requester.request(
            "PUT",
            "accounts/{}/logins/{}".format(self.account_id, self.id),
            _kwargs=combine_kwargs(**kwargs),
        )
        return Login(self._requester, response.json())
