export const config = {
  "dev": {
    "username": process.env.POSTGRES_USERNAME,//"udagramakudev",
    "password": process.env.POSTGRES_PASSWORD,//"$Udagram_2020",
    "database": process.env.POSTGRES_DATABASE,//"udagramakudev",
    "host": process.env.POSTGRES_HOST,//"udagramakudev.cu1hzbxc8icj.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": process.env.AWS_REGION,//"us-east-1",
    "aws_profile": process.env.AWS_PROFILE,//"default",
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET//"udagramakudev"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": "helloworld"
  }
}
