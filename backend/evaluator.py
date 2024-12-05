def evaluate_code(user_code):
    # Define the test cases
    test_cases = [
        {"input": "[2, 7, 11, 15], 9", "output": "[0, 1]"},
        {"input": "[3, 2, 4], 6", "output": "[1, 2]"},
        {"input": "[3, 3], 6", "output": "[0, 1]"}
    ]
    try:
        # Prepare the execution environment
        exec_env = {}
        exec(user_code, {}, exec_env)
        func = exec_env.get("twoSum")

        if not func:
            return "No function named 'twoSum' found."

        for case in test_cases:
            nums, target = eval(case["input"])
            if func(nums, target) != eval(case["output"]):
                return f"Failed on input: {case['input']}"

        return "All test cases passed!"
    except Exception as e:
        return str(e)
