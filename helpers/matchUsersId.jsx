export const matchUserId = (array, userId) => {
  console.log(array.some((follow) => follow.followed_user_id._id === userId));
  return array.some((follow) => follow.followed_user_id._id === userId);
};
