from data import Data
import pandas as pd
import os


def main():
    host = os.environ.get('DBHOST', 'localhost')
    port = '5432'
    database = os.environ.get('DBDB', 'mvk')
    user = os.environ.get('DBUSER', 'postgres')
    password = os.environ.get('DBPASS', '')

    test = Data(user, host, port, database)

    #df = pd.read_csv("nba.csv")
    df = test.get_data_table('anforandetext')

    # TEST INSERT QUERY
    test.insert_data_table(df, 'resultat')
    # print(test.cursor)
    # test.get_data_table('"'+'Books'+'"')


if __name__ == '__main__':
    main()
