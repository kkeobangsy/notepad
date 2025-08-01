import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;


public class backend {

    public static void main(String[] args) {

        String url = "https://cloud.oracle.com/db/adbs/ocid1.autonomousdatabase.oc1.iad.anuwcljtvut3kjyaopvzduhcwigjxdimcv4jn65nepxt36no3jwgyx726bca?region=us-ashburn-1";
        String user = "inforCloudDb";
        String password = "$04031980Aa$";


        Connection connection = null;


        try{

            Class.forName("oracle.jdbc.driver.OracleDriver");


            connection = DriverManager.getConnection(url,user,password);


            if(connection != null){
                System.out.println("Successfully connected to Oracle database");
            }

        } catch (ClassNotFoundException e){

            System.err.println("Oracle JDBC driver not found: " + e.getMessage());

        } catch (SQLException e){

            System.err.println("Database connection failed: " + e.getMessage());
            e.printStackTrace();


        }finally {

            if(connection != null){
                try{
                    connection.close();
                    System.out.println("Connection closed.");
                } catch(SQLException e){
                    System.out.println("Error closing connection: " + e.getMessage());
                }

            }
        }

    }
}
