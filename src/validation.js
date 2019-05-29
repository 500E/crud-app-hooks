export function validate(user) {
  let errors = {}
  if (!user.nickname) {
    errors.nickname = 'Please enter your nickname'
  }
  if (!user.email) {
    errors.email = 'Please enter your email address'
  } else if (!/\S+@\S+\.\S+/.test(user.email)) {
    errors.email = 'Wrong email format'
  }
  if (!user.ip) {
    errors.ip = 'Please enter your ip address'
  } else if (
    !/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      user.ip
    )
  ) {
    errors.ip = 'Wrong IP address format'
  }
  return errors
}
