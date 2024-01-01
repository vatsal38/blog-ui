import axiosInstance from "@services/axiosConfig";

class blogServices {
  // CREATE THE BLOG
  createBlog = async (bodyData: any) => {
    if (!bodyData) return null;
    return await axiosInstance.post(`/api/blog/create`, bodyData);
  };

  // GET ALL BLOGS
  getAllBlogs = async ({ queryKey }: any) => {
    const [_key] = queryKey;
    const response = await axiosInstance.get(`api/blogs`);
    return response;
  };

  // BLOG BY USER ID
  getBlogsByUserId = async ({ queryKey }: any) => {
    const [_key, { userId }] = queryKey;
    var response = await axiosInstance.get(`/api/${userId}/blogs`);
    return response;
  };

  // activateUser = async (organizationId, userId) => {
  //   if (!organizationId || !userId) return null;
  //   return await axiosInstance.post(
  //     `/organizations/${organizationId}/users/${userId}/activate`
  //   );
  // };

  // archiveUser = async (organizationId, userId) => {
  //   if (!organizationId || !userId) return null;
  //   return await axiosInstance.post(
  //     `/organizations/${organizationId}/users/${userId}/archive`
  //   );
  // };

  // deactivateUser = async (organizationId, userId) => {
  //   if (!organizationId || !userId) return null;
  //   return await axiosInstance.post(
  //     `/organizations/${organizationId}/users/${userId}/deactivate`
  //   );
  // };

  // restoreUser = async (organizationId, userId) => {
  //   if (!organizationId || !userId) return null;
  //   return await axiosInstance.post(
  //     `/organizations/${organizationId}/users/${userId}/restore`
  //   );
  // };

  // getPermission = async ({ queryKey }) => {
  //   const [_key, { take, skip, organizationId, permissionCode }] = queryKey;
  //   var response = await axiosInstance.get(
  //     `/organizations/${organizationId}/permissions/${permissionCode}/users`,
  //     {
  //       params: {
  //         organizationId,
  //         permissionCode,
  //         take,
  //         skip,
  //       },
  //     }
  //   );
  //   return response;
  // };

  // assignPermissions = async (organizationId, userId, permissions) => {
  //   if (!userId) return null;
  //   return await axiosInstance.post(
  //     `/organizations/${organizationId}/users/${userId}/assign-permissions`,
  //     permissions
  //   );
  // };

  //   getUserById = async ({ queryKey }: any) => {
  //     const [_key, { userId }] = queryKey;
  //     var response = await axiosInstance.get(`api/user/${userId}`);
  //     return response;
  //   };

  // updateUserById = async (organizationId, userId, data) => {
  //   var response = await axiosInstance.patch(
  //     `/organizations/${organizationId}/users/${userId}`,
  //     data
  //   );
  //   return response;
  // };
}

export default new blogServices();
