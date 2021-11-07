import { StyleSheet } from "react-native";
import colors from "../../../../styles/colors";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    padding: 10,
    marginBottom: 20,
    borderRadius: 15,
    minHeight: 150
  },
  titleContainer: {
    alignItems: 'center',
    flexDirection:'row'
  },
  icon:{
    width: 50,
    height: 50
  },
  title:{
    paddingLeft: 16,
    fontSize: 24,
    fontFamily: 'Nunito_400Regular',
    fontWeight: 'bold',
  },
  description: {
    marginTop: 20,
    marginHorizontal: '15%',
    width: '70%',
    fontFamily: 'Nunito_400Regular',
    fontWeight: '100',
    fontSize: 14
  },
  arrow: {
    marginRight: 16
  },
  iconTeam: {
    width: 25,
    height: 25,
    borderRadius: 70/2
  },
  nextGame: {
    paddingLeft: 16
  }
})