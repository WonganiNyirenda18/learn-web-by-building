export default function Footer() {
    return (
        <footer className="bg-white py-16 border-t border-gray-50">
            <div className="max-w-2xl mx-auto px-6 text-center space-y-12">
                <h3 className="text-2xl font-bold text-gray-900">Contacts</h3>

                <div className="space-y-4">
                    <p className="text-gray-600 text-sm">wonganinyirenda18@gmail.com</p>
                    <p className="text-gray-600 text-sm">+265 9995 358 915</p>
                </div>

                <div>
                    <ul>
                        <li>WhatsApp</li>
                        <li>Facebook</li>
                        <li>Github</li>
                    </ul>
                </div>

                <div>
                    <p>Copyright &copy; 2026.</p>
                    <p>Created by Wongani Nyirenda</p>
                </div>
            </div>
        </footer>
    );
}