# knockoutsort
generic knockout sorter that works.

We tried using jquery table sorter using knockout binding but when the data in the table data is dynamic, the table wont get sorted with refreshed data. We tried multiple ways to overcome this issue and we thought this would be the most generic solution. 

# Implementation : 
on th you need the following data bind 
# data-bind="knockoutSort: { arr: FilteredSubjects, prop: 'Name' }"
arr can be an knockout ObservableArray or a pureComputed and prop is the property in the array to sort on

change your foreach loop to 
# data-bind="foreach:FilteredSubjects.sorted"

full example code below : 
<!--table-->
                                <table class="mdl-data-table mdl-js-data-table pt-width-full pt-data-table--main">
                                    <!--table header-->
                                    <thead>
                                        <tr>
                                            <th class="mdl-data-table__cell--non-numeric" data-bind="knockoutSort: { arr: FilteredSubjects, prop: 'Name' }">Name</th>
                                            <th data-bind="knockoutSort: { arr: FilteredSubjects, prop: 'Description' }">Description</th>
                                            <td>Actions</td>
                                        </tr>
                                    </thead>
                                    <!--end of table header-->
                                    <!--table body-->
                                    <tbody data-bind="foreach:FilteredSubjects.sorted">
                                        <tr>
                                            <td data-bind="text:Name"></td>
                                            <td data-bind="text:Description"></td>
                                            <td>
                                                <button class="mdl-button mdl-js-button mdl-button--mini-icon pt-button--mini-icon pt-text-blue--light mdl-typography--text-uppercase pull-right pt-margin-left-16" data-upgraded=",MaterialButton" data-bind="click:function(){ $parent.AddEditSubject($data); return false;}, text: (IsActive() ? 'Edit Me': 'Activate Me')">
                                                    <i class="material-icons">mode_edit</i> Edit Me
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <!--end of table body-->
                                </table>
                                <!--end of table-->
                                
 # by David Vivash and Venkata Tata
