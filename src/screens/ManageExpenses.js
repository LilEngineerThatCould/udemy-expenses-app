import { View, Text, StyleSheet } from 'react-native';

const ManageExpenses = () => {
    return (
        <View styl={styles.rootContainer}>
            <Text>Manage Expenses screen</Text>
        </View>
    );
};

export default ManageExpenses;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
});
