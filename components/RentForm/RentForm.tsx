export default function RentForm() {
    return (
        <div>
            <h2>Book your car now</h2>
            <p>Stay connected! We are always ready to help you.</p>
            <button
                className={styles.buttonRent}
                type="submit"
                disabled={isSubmitting}
            >Send</button>
        </div>
    )
}