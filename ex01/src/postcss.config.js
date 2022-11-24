// 풀캘린더에 로컬css파일을 적용하기 위한
module.exports = {
    plugins: [
      require('postcss-custom-properties')({
        preserve: false, // completely reduce all css vars
        importFrom: [
          /* 이 경로 css파일 적용 */
          'src/fullcalendar-vars.css' // look here for the new values
        ]
      }),
      require('postcss-calc')
    ]
  }