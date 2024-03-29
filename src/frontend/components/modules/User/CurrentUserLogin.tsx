import { useReducer } from 'react';

import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/elements/AlertDialog';
import { Dialog } from '@/components/elements/Dialog';
import { Separator } from '@/components/elements/Separator';
import Login from '@/components/modules/ModalDialogues/Login';
import UserAccountSelect from '@/components/modules/User/UserAccountSelect';
import { useAppSelector } from '@/store/hooks';
import { Button } from '@/frontend/components/elements/Button';

const CurrentUserLogin = () => {
    const currentUser = useAppSelector((state) => state.user.currentUser);
    const availableUsers = useAppSelector((state) => state.user.availableUsers);

    const [alertOpen, toggleAlertOpen] = useReducer(
        (prev) => !prev,
        !currentUser
    );
    const [registerUserOpen, toggleRegisterUserOpen] = useReducer(
        (prev) => !prev,
        false
    );

    const availableUsersExist = availableUsers.length > 0;
    const isUserLoggedIn = currentUser !== null;
    const isThisFirstTime = !availableUsersExist && !isUserLoggedIn;

    const ctaText = isThisFirstTime ? 'Register' : 'Log in';

    const handleFirstTimeUser = () => {
        toggleAlertOpen();
        toggleRegisterUserOpen();
    };

    if (currentUser) {
        return null;
    }

    if (registerUserOpen) {
        return (
            <Dialog open={registerUserOpen}>
                <Login shouldShowRegisterFirst className="w-fit" />
            </Dialog>
        );
    }

    return (
        <AlertDialog open={alertOpen}>
            <AlertDialogContent className="w-fit">
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Oops, you are not logged in.
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        To use this application, please log in with your
                        account.
                    </AlertDialogDescription>
                    <Separator className="!mt-4" />
                    <div className="my-4">
                        <UserAccountSelect className="my-4" />
                    </div>
                    <Separator className="!mb-4" />
                </AlertDialogHeader>
                <AlertDialogFooter className="!flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <p>Would you like to create a new account? </p>
                        <Button
                            onClick={handleFirstTimeUser}
                            className="!px-0 text-blue-600 hover:bg-transparent hover:text-blue-800 font-semibold"
                            variant="ghost"
                        >
                            Click here
                        </Button>
                    </div>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default CurrentUserLogin;
