import { View, Text, StyleSheet } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

const AllExpenses = () => {
    return <ExpensesOutput expensesPeriod='Total' />;
};

export default AllExpenses;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
});
