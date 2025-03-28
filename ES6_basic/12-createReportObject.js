/* eslint-disable */
export default function createReportObject(employeeList) {
	return {
		allEmployees: {...employeesList},
		getNumberOfDepartments() {
			return Object.keys(employeesList).length;
		},
	};
}
