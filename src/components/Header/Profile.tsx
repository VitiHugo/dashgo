import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (        
    <Flex align="center">
      {showProfileData && 
        <Box mr="4" textAlign="right">
          <Text>Vitor Hugo</Text>
          <Text color="gray.300" fontSize="small">
            vitork42@gmail.com
          </Text>
        </Box>
      }

      <Avatar
        size="md"
        name="Vitor Hugo"
        src="https://github.com/vitihugo.png" 
      />
    </Flex>
  )
}