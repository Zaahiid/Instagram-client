import { Box, Image } from "@chakra-ui/react"
import PostFooter from "./PostFooter"
import PostHeader from "./PostHeader"

const FeedPost = () => {
  return (
    <>
        <PostHeader/>
        <Box my={2}>
            <Image src="/img1.png" alt="user profile pic" size={"sm"}/>
        </Box>
        <PostFooter/>
    </>
  )
}

export default FeedPost